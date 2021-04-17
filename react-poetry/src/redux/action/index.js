export default {
    changeMenuItem(text){
        return {
            type:"CHANGE_MENU_ITEM",
            text
        }
    },
    changeData(data){
        return {
            type:"CHANGE_DATA",
            data
        }
    },

}