import React from 'react';
import {useState} from 'react'
import {StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 

export default function App() {
  const buttons = ['CLEAR','C','/','+',7,8,9,'x',4,5,6,'-',3,2,1,0,'00','.','=']  
  const [currentNumber,setCurrentNumber] = useState("")
  const [lastNumber,setLastNumber] = useState("")

  function calculadora(){
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
    }
  }
  function handleInput(buttonPressed){
    console.log(buttonPressed)
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'C':
        setCurrentNumber(currentNumber.substring(0,(currentNumber.length -1)))
        return
      case 'CLEAR':
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculadora()
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }
  const styles = StyleSheet.create({
    results:{
      backgroundColor:"#FFFAFA",
      width:'100%',
      minHeight:160,
      alignItems:'flex-end',
      justifyContent:'flex-end'
    },
    resultText:{
      color:"#282F38",
      margin:10,
      fontSize:40
    },
    historyText:{
      color:"#7C7C7C",
      fontSize:20,
      marginRight:10,
      alignSelf:'flex-end',
    },
    buttons:{
      flexDirection:'row',
      flexWrap:'wrap',
    },
    button:{
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      minWidth:90, 
      minHeight:90,
      flex:2,
    },
    textButton:{
      color:"#000000",
      fontSize:20,
    }, 
    caixa:{
      backgroundColor:'#FAFAFA',
      shadowColor:'#DEDEDE',
      borderColor:'#000',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      width:65,
      height:60,
      shadowOpacity:0.2,
      shadowRadius:1.5,
      shadowOffset:{width: 0, height: 2},
      elevation:2,
      margin:10,
    },
  });
  return (
    <View style = {styles.container}>
      <LinearGradient
                colors = {['#FFA500','#FF8C00','#FF7F50']}
                style = {{
                  position:'absolute',
                  left:0,
                  right:0,
                  top:0,
                  height:696,
                }}
              />
    <View>
      <View style = {styles.results}>
        <Text style = {styles.historyText} > {lastNumber}</Text>
        <Text style = {styles.resultText} > {currentNumber}</Text>
      </View>
      <View style = {styles.buttons}>
          {buttons.map((button) => 
          button === '=' ?
        <TouchableOpacity onPress = {() => handleInput(button)} key = {button} style = {[styles.caixa,{backgroundColor: '#191970'}]}>
          <Text style = {[styles.textButton,{color:"white",fontSize:30}]} > {button}</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity onPress = {() => handleInput(button)} key = {button} style = {[styles.caixa]}>
            <Text style = {styles.textButton} > {button}</Text>
          </TouchableOpacity>   
        )}
      </View>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
  },
});