import{
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    containerPesquisar:
    {
        flexDirection: 'row',
        height: 20,
    },

    inputPesquisar:
    {
        borderWidth:1,
        flex:7
    },

    btnPesquisar:
    {
        backgroundColor: '#1ebdc5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,       
    },

    icon:
    {
        width: 48,
        height: 48,
    },

    textBtnPesquisar:
    {
        color: '#000000',
        fontWeight: 'bold',
    }
})

export default styles