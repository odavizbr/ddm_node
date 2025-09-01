import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 26,
    color: '#EAEAEA',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 45,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    width: '85%',
    borderRadius: 8,
    color: '#FFF',
    backgroundColor: '#1E1E1E',
  },
  button: {
    backgroundColor: '#3A82F6',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  welcome: {
    marginTop: 25,
    fontSize: 20,
    color: '#EAEAEA',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 12,
  },
});

export default styles;
