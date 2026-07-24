import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Alert,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Camera() {
    // 1. Camera & Media permissions
    const [permission, requestPermission] = useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
    const [galleryPermission, requestGalleryPermission] = ImagePicker.useMediaLibraryPermissions();

    // 2. Camera ref & state
    const cameraRef = useRef(null);
    const [capturedImageUri, setCapturedImageUri] = useState(null);
    const navigation = useNavigation();

    // If permissions are still loading
    if (!permission || !mediaPermission || !galleryPermission) {
        return <View style={styles.container} />;
    }

    // If camera permissions are not granted yet
    if (!permission.granted) {
        return (
            <SafeAreaView style={styles.permissionContainer}>
                <Text style={styles.permissionText}>
                    We need your permission to access the camera
                </Text>
                <TouchableOpacity style={styles.btn} onPress={requestPermission}>
                    <Text style={styles.btnText}>Grant Permission</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    const pickFromGallery = async () => {
        if (!galleryPermission.granted) {
            const newPermission = await requestGalleryPermission();
            if (!newPermission.granted) {
                Alert.alert('Permission needed', 'Please allow access to your gallery to continue.');
                return;
            }
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const selectedImageUri = result.assets[0].uri;
            setCapturedImageUri(selectedImageUri);
            navigation.navigate('Auth', {
                screen: 'CreateAccount',
                params: { photoUri: selectedImageUri },
            });
            Alert.alert('Success!', 'Photo selected from your gallery.');
        }
    };

    // 3. Take Picture Handler
    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                // Take photo (returns an object containing the temporary local `uri`)
                const photo = await cameraRef.current.takePictureAsync();

                // Save the image URI to your local state
                setCapturedImageUri(photo.uri);

                // Save to Phone Gallery (if permission granted)
                if (mediaPermission.granted) {
                    await MediaLibrary.saveToLibraryAsync(photo.uri);
                } else {
                    // Ask for library permission if not granted yet
                    const newPermission = await requestMediaPermission();
                    if (newPermission.granted) {
                        await MediaLibrary.saveToLibraryAsync(photo.uri);
                    }
                }

                navigation.navigate('Auth', {
                    screen: 'CreateAccount',
                    params: { photoUri: photo.uri },
                });
                Alert.alert('Success!', 'Photo saved and returned to Create Account.');
            } catch (error) {
                console.error('Failed to take picture:', error);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {capturedImageUri ? (
                // ---- PREVIEW STATE (Shows captured photo saved in state) ----
                <View style={styles.previewContainer}>
                    <Image source={{ uri: capturedImageUri }} style={styles.previewImage} />
                    <TouchableOpacity
                        style={styles.retakeBtn}
                        onPress={() => setCapturedImageUri(null)}
                    >
                        <Ionicons name="refresh" size={24} color="#fff" />
                        <Text style={styles.btnText}>Retake Photo</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // ---- CAMERA STATE (Live Viewfinder) ----
                <CameraView style={styles.camera} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.galleryBtn} onPress={pickFromGallery}>
                            <Ionicons name="images" size={24} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.captureBtn} onPress={takePicture}>
                            <View style={styles.captureInnerCircle} />
                        </TouchableOpacity>
                    </View>
                </CameraView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    permissionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    permissionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    camera: {
        flex: 1,


    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        flexDirection: 'row',
        gap: 24,
        position: 'absolute',
        bottom: 0,
        left: 50,
        right: 50
    },
    captureBtn: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 4,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    galleryBtn: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    captureInnerCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    previewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewImage: {
        width: '100%',
        height: '80%',
        borderRadius: 12,
    },
    retakeBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3B6EF5',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 20,
    },
    btn: {
        backgroundColor: '#3B6EF5',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
});