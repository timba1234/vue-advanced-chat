import { IMAGE_TYPES, VIDEO_TYPES, AUDIO_TYPES } from './constants'

function checkMediaType(types, file) {
	if (!file) return
	const { type } = file
	return types.some(t => type.toLowerCase().includes(t))
}

export function isImageFile(file) {
	return checkMediaType(IMAGE_TYPES, file)
}

export function isVideoFile(file) {
	return checkMediaType(VIDEO_TYPES, file)
}

export function isAudioFile(file) {
	return checkMediaType(AUDIO_TYPES, file)
}
