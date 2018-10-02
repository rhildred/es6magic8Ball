import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sQuestion:"",
      sAnswer:"",
      sQuestionInput:""
    };
    this.aAnswers=[
      "yes", "no", "maybe", "perhaps", "definitely", "never", "most likely"
    ]
  }
  askQuestion(){
    this.setState({sQuestion: this.state.sQuestionInput});
    let nRandom = Math.floor(Math.random()*this.aAnswers.length);
    this.setState({sAnswer: this.aAnswers[nRandom]});
    this.setState({sQuestionInput: ""});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the magic 8 ball!</Text>
        <Text>Type a question with a yes or no answer in the box below.</Text>
        <Text>Prepare to be amazed.</Text>
        <TextInput 
                ref='questionInput'
                placeholder="Type your question here!"
                value={this.state.sQuestionInput}
                onChangeText={(text) => this.setState({ sQuestionInput: text })}
                onSubmitEditing={() => this.askQuestion()}
                autoFocus={true}
                blurOnSubmit={false}
        />
        <Text>{this.state.sQuestion}</Text>
        <Text>{this.state.sAnswer}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
