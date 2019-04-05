import{
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    containerPesquisar:
    {
        flexDirection: 'row',
    },

    inputPesquisar:
    {
        borderWidth: 1,
        borderColor: '#1ebdc5',
        color: 'rgba(28,74,90, 0.9)',
        flex: 7,
        padding: 10,
    },

    btnPesquisar:
    {
        backgroundColor: '#1ebdc5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10      
    },

    icon:
    {
        width: 24,
        height: 24,
    },

    textBtnPesquisar:
    {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    }
})

export default styles