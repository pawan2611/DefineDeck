function findObjectWithTextAndAudio(array) {
    return array.find(obj => obj.hasOwnProperty('text') && obj.hasOwnProperty('audio') && obj.text !== '' && obj.audio !== '');
}
function findObjectWithText(array) {
    return array.find(obj => obj.hasOwnProperty('text') && obj.text !== '');
}
function findObjectWithAudio(array) {
    return array.find(obj => obj.hasOwnProperty('audio') && obj.audio !== '');
}