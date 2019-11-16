import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
import ListShop from './ListShop';


export default class AppNear extends Component{
    
    render(){
        return (
            <div>
                <NavBar style={{background:'#bc0400'}} 
                leftContent={<select className='sel'>
                    <option value ="volvo">石家庄</option>
                    <option value ="saab">北京</option>
                    <option value="opel">长沙</option>
                </select>}
                rightContent={
                    <div className='narbox' style={{width:'235px',paddingLeft:'0',paddingRight:'10%'}}>
                        <div className='searchbox'>
                            <div><img src={require('../imgs/search.png')} /></div>
                            <input type='text' name='movie' className='search' value='搜索商家、品类或商圈' style={{fontSize:'14px'}}/>
                        </div>
                    </div>
                }>
                </NavBar>

                <div className='near1'>
                    <select className='nearsel'>
                        <option value ="volvo">1000m</option>
                        <option value ="saab">800m</option>
                        <option value="opel">500m</option>
                    </select>
                    <select className='nearsel'>
                        <option value ="volvo">全部餐厅</option>
                        <option value ="saab">中餐厅</option>
                        <option value="opel">西餐厅</option>
                    </select>
                    <select className='nearsel'>
                        <option value ="volvo">默认排序</option>
                        <option value ="saab">配送时间</option>
                        <option value="opel">配送距离</option>
                    </select>
                </div>

                <ListShop />

            </div>       
        )
    }
}