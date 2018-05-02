import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Form, Item, Input, Label, List, ListItem } from 'native-base';
import {Button, Text} from 'react-native'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      massa: 0,
      tinggi: 0,
      nilai: '',
      beratbadan: ''
    };
  }
  
  handleSubmit = () => {
    this.setState({
      nilai: (this.state.massa * 10000) / Math.pow((this.state.tinggi),2)
    });
  }


  render() {
    switch(true){
      case(this.state.nilai == 0):
        this.state.beratbadan = '';
          break;
      case(this.state.nilai<18.5):
        this.state.beratbadan = 'Berat badan anda kurang';
          break;
      case(this.state.nilai>=18.5 && this.state.nilai<=24.9):
        this.state.beratbadan = 'Berat badan anda ideal';
          break;
      case(this.state.nilai>=25.0 && this.state.nilai<=29.9):
        this.state.beratbadan = 'Berat badan anda berlebih';
          break;
      case(this.state.nilai>=30.0 && this.state.nilai<=39.9):
        this.state.beratbadan = 'Berat badan anda sangat berlebih'
          break;
      case(this.state.nilai>=39.9):
        this.state.beratbadan = 'Obesitas'
          break;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Index Massa Tubuh</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Massa (kg)</Label>
              <Input 
                onChangeText={(massa) => this.setState({massa})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Tinggi (cm)</Label>
              <Input 
                onChangeText={(tinggi) => this.setState({tinggi})}       
              />
            </Item>
          </Form>
          <Button title={"Hitung IMT"} onPress={this.handleSubmit} />
          <List>
            <ListItem itemDivider>
              <Text>Berat Badan</Text>
            </ListItem>                    
            <ListItem >
              <Text>{this.state.massa} KG</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Tinggi</Text>
            </ListItem>                    
            <ListItem >
              <Text>{this.state.tinggi / 100} M</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Index Massa Tubuh</Text>
            </ListItem>                    
            <ListItem >
              <Text>{this.state.nilai}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Diagnosa</Text>
            </ListItem>                    
            <ListItem >
              <Text>{this.state.beratbadan}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}