import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  scoreItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  playerLabelNos: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue', // Cor azul para a palavra "Nós"
  },
  playerScoreNos: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'blue', // Cor azul para o numeral de "Nós"
  },
  playerLabelEles: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple', // Cor roxa para a palavra "Eles"
  },
  playerScoreEles: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'purple', // Cor roxa para o numeral de "Eles"
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 5,
    marginVertical: 5, // Adicionei margem vertical para separar os botões
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonReset: {
    backgroundColor: 'blue',
  },
});

export default styles;
