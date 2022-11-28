import React from "react";
import { View,Text,Button,StyleSheet, Dimensions,TouchableOpacity,Image} from "react-native";
import * as Animatable from 'react-native-animatable';
const SplashScreen =()=>{
  return(
    <View style={styles.container}>
     <View style={styles.header}>
     <Animatable.Image animation="bounce" duration="1000" source={{uri:'https://indiancoding.com/images/resources/logo-new-red.png'}}
     style={styles.logo} 
     resizeMode="stretch"
     />
     <Animatable.Text style={{color:'white',fontSize:27,marginTop:60,fontWeight:'bold'}}>ENGLISHBOLEGA</Animatable.Text>
     </View>
     <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
     <Text style={styles.title}>Stay connected with everyone!</Text>
     <Text style={styles.text}>Sign in with account</Text>
     <View style={styles.button}>
     <TouchableOpacity onPress={()=> alert('click me')}>
      <Text style={styles.bu}>Get Started</Text>
     </TouchableOpacity>
     </View>
     </Animatable.View>
    </View>
  );
};
export default SplashScreen;

const{height} =Dimensions.get("screen");
const height_logo = height * 0.28;
const styles =StyleSheet.create(
  {
    container:{
      flex:1,
     backgroundColor:'#009387'
    },
    header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    },
    footer:{
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:50,
      paddingHorizontal:30
    },
    logo:{
     height:170,
     width:170,
      backgroundColor:'white',
      borderRadius:100
    },
    title:{
      color:'#05375a',
      fontSize:30,
      fontWeight:'bold'
    },
    text:{
      color:'gray',
      marginTop:5
    },
    button:{
      alignItems:'flex-end',
      marginTop:30
    },
    signIn:{
      width:150,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      flexDirection:'row'
    },
    testSign:{
      color:'white',
      fontWeight:'bold'
    },
    bu:{
      width:150,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      flexDirection:'row',
      backgroundColor:'green',
      fontSize:16,
      color:'white',
      fontWeight:'bold',
      textAlign:'center',
     
      padding:9
    }
  }
);




import React,{cloneElement, Component} from "react";
import { Text,View,Image,ScrollView,TouchableOpacity,Button,StatusBar } from "react-native";

import Swiper from "react-native-swiper";
export default class Screen2 extends Component
{
   Show=()=>
   {
      this.props.navigation.navigate('S3');
   }

   Shows=()=>
   {
      this.props.navigation.navigate('S4');
   }
   Showss=()=>
   {
      this.props.navigation.navigate('S5');
   }

   
    render()
    {
        return(
          
         <View  style={{flex:1}}>
           
              <StatusBar style='light-content' hidden={false} backgroundColor='white'></StatusBar>
             
              <Image style={{height:90,width:90,marginTop:-10,marginLeft:160}} source={{uri:'https://indiancoding.com/images/resources/logo-new-red.png'}}></Image>
              <ScrollView>
            <Button  title="Contact Us"></Button>
                <Swiper height={300} horizontal={true} autoplay>

                    <View>
                    <Image style={{height:240,width:370,marginTop:30,marginLeft:20}} source={{uri:'https://www.zenithguidance.com/wp-content/uploads/2021/02/spoken-english.jpg'}}></Image>
                    </View>

             <View>
             <Image style={{height:240,width:370,marginTop:30,marginLeft:20}} source={{uri:'https://i.ytimg.com/vi/5k7_z8hv8Rk/maxresdefault.jpg'}}></Image>
             </View>

             <View>
             <Image style={{height:240,width:370,marginTop:30,marginLeft:20}} source={{uri:'https://www.zenfotec.com/wp-content/uploads/2018/11/spoken-english-courses.jpg'}}></Image>
             </View>

             <View>
             <Image style={{height:240,width:370,marginTop:30,marginLeft:20}} source={{uri:'https://zeusacademy.in/images/back3.jpg'}}></Image>
             </View>
            
         </Swiper>

               <View style={{flex:2}}>
                  <Text style={{marginTop:1,textAlign:'center',fontSize:30,fontWeight:'bold',fontFamily: 'Helvetica-LightOblique',color:'red'}}>Indian Coding Academy</Text>
              
               </View>


          
<View>
           <View>
            <TouchableOpacity onPress={this.Show}>
             <Image  style={{height:150,width:170,marginTop:30,marginLeft:10,borderRadius:15}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvIwEnr8FTFfY17tAmEi1NF3Xfq8rFKL3Yg&usqp=CAU'}}></Image>
             </TouchableOpacity>
             <TouchableOpacity style={{height:35,width:170,backgroundColor:'#0a7e8c',marginLeft:10,marginTop:2,marginTop:-25,borderBottomLeftRadius:15,borderBottomRightRadius:15}}><Text style={{textAlign:'center',marginTop:10,fontSize:17,fontWeight:'bold',color:'white',marginTop:7}}>Free Courses</Text></TouchableOpacity></View>


           <View>
            <TouchableOpacity onPress={this.Shows}>
             <Image style={{height:150,width:170,marginLeft:220,borderRadius:15,marginTop:-160}} source={{uri:'https://thumbs.dreamstime.com/b/cartoon-kids-learning-foreign-languages-man-teach-vector-illustration-boy-english-french-italian-spanish-children-speak-talk-150483936.jpg'}} ></Image>
             </TouchableOpacity>
             <TouchableOpacity  style={{height:35,width:170,backgroundColor:'#0a7e8c',marginLeft:10,marginTop:20,marginTop:-1,borderBottomLeftRadius:15,borderBottomRightRadius:15,marginLeft:220,marginTop:-35}}><Text style={{textAlign:'center',marginTop:10,fontSize:17,fontWeight:'bold',color:'white',marginTop:7}}>Quick Learning</Text></TouchableOpacity>
           </View>



           </View>
<View>
<TouchableOpacity onPress={this.Showss}>
             <Image style={{height:150,width:170,marginLeft:10,borderRadius:15,marginTop:50}} source={{uri:'https://previews.123rf.com/images/emojoez/emojoez1807/emojoez180700331/114923109-flat-design-concept-people-education-online-knowledge-witgh-e-learning-program-vector-illustrations-.jpg'}} ></Image>
             </TouchableOpacity>
             <TouchableOpacity   style={{height:35,width:170,backgroundColor:'#0a7e8c',marginLeft:10,marginTop:20,marginTop:-1,borderBottomLeftRadius:15,borderBottomRightRadius:15,marginLeft:10,marginTop:-25}}><Text style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',color:'white',marginTop:7}}>Offline Classes</Text></TouchableOpacity>
</View>
           
<View>
            <TouchableOpacity>
             <Image style={{height:150,width:170,marginLeft:220,borderRadius:15,marginTop:-160}} source={{uri:'https://png.pngtree.com/png-vector/20210329/ourlarge/pngtree-teacher-online-teaching-online-learning-illustration-png-image_3160393.jpg'}} ></Image>
             </TouchableOpacity>
             <TouchableOpacity  style={{height:35,width:170,backgroundColor:'#0a7e8c',marginLeft:10,marginTop:20,marginTop:-1,borderBottomLeftRadius:15,borderBottomRightRadius:15,marginLeft:220,marginTop:-35}}><Text style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold',color:'white',marginTop:7}}>Partner With Us</Text></TouchableOpacity>
           <Text></Text>
           </View>
               </ScrollView>
            </View>
           
        )
    }
}