
export default function(state=null, action){
    switch(action.type){
        case 'NEXT_IMAGE_CLICKED':
            return {currentImageID: ((action.payload.currentImageId+1) > 5 ?  1 : action.payload.currentImageId+1)};
            break;
        case 'PREV_IMAGE_CLICKED':
            return {currentImageID: ((action.payload.currentImageId-1) < 1 ?  5 : action.payload.currentImageId-1)};
            break;
        default:
            return {
                currentImageID: 1,
            }

    }
}