const initialState = {
    psd: {
        height: 0,
        width: 0
    },
    client: {
        height: 0,
        width: 0
    },
    item: {
        height: 0,
        width: 0
    },
    outcome: {
        pixel: {
            height: 0,
            width: 0
        },
        ratio: {
            height: 0,
            width: 0
        }
    }

}


const pixelReducer = (state = initialState, action) => {

    function calcOutcome(state) {
        let obj = {
            pixel: {
                height: 0,
                width: 0
            },
            ratio: {
                height: 0,
                width: 0
            }
        }

        obj.pixel.height = state.item.height * state.client.height / state.psd.height
        obj.pixel.width = state.item.width * state.client.width / state.psd.width
        obj.ratio.height = state.item.height / state.psd.height
        obj.ratio.width = state.item.width  / state.psd.width  

        return obj
    }    
    switch (action.type) {
        case 'INPUT_CHANGE':
            let obj = {}
            obj[action.changedAttr] = {}
            obj[action.changedAttr][action.heightOrWidth] = action.value
            let newState = Object.assign({}, state, obj)
            newState['outcome'] = calcOutcome(newState)       
            console.log(state, newState)     
            return Object.assign({}, state, newState)
    }
}

export default pixelReducer