import { Component, PropsWithChildren } from 'react'
import { View, Text,Swiper,SwiperItem } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  constructor(props){
	  super(props);
	  this.state = {
		  current:0,
		  scurrent:0
	  }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }
onChange=(event)=>{
	console.log(event.detail.current)
this.setState({
	current:event.detail.current,
	
})
}
onclickChange=(index)=>{
	console.log(index)
this.setState({
	current:index,
	
})
}
  componentDidHide () { }

  render () {
    return (
      <View className='index'>
	  <View onClick={()=>{this.onclickChange(0)}} className='demo-text-1' style='background:red'>0</View>
	  	  <View onClick={()=>{this.onclickChange(1)}} className='demo-text-1' style='background:red'>1</View>
		  	  <View onClick={()=>{this.onclickChange(2)}} className='demo-text-1' style='background:red'>2</View>
        <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        current={this.state.current}
        circular
		onChange={(event)=>{this.onChange(event)}}
        indicatorDots
        autoplay={true}
		>
        <SwiperItem>
          <View className='demo-text-1' style='background:red'>轮播1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2' style='background:green'>轮播2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3' style='background:blue'>轮播3</View>
        </SwiperItem>
      </Swiper>
      </View>
    )
  }
}
