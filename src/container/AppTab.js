import React from 'react';
import { TabBar } from 'antd-mobile';
import Apphome from './Apphome';
import AppNear from './AppNear';
import AppMy from './AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#bc0400"
        >
          <TabBar.Item
            key="Life"
            icon={<div style={{
              width: '25px',
              height: '35px',
              paddingTop:'5px'
              }}
            ><img src={require('../imgs/tabimgfj_03.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={<div style={{
              width: '25px',
              height: '35px',
              paddingTop:'5px'
              }}
            ><img src={require('../imgs/tabimg_03.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
              <Apphome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '25px',
                height: '35px',
                paddingTop:'5px'
                }}
              ><img src={require('../imgs/tabimg_05.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={
              <div style={{
                width: '25px',
                height: '35px',
                paddingTop:'5px'
                }}
              ><img src={require('../imgs/tabimgfj_05.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <AppNear />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '25px',
                height: '35px',
                paddingTop:'5px'
                }}
              ><img src={require('../imgs/tabimg_07.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            selectedIcon={
              <div style={{
                width: '25px',
                height: '35px',
                paddingTop:'5px'
                }}
              ><img src={require('../imgs/tabimgdd_03.jpg')} style={{width:'100%',height:'100%'}}/></div>
            }
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            订单
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{
              width: '25px',
              height: '35px',
              paddingTop:'5px'
              }}
            ><img src={require('../imgs/tabimg_09.jpg')} style={{width:'100%',height:'100%'}}/></div>}
            selectedIcon={<div style={{
              width: '25px',
              height: '35px',
              paddingTop:'5px'
              }}
            ><img src={require('../imgs/tabimgmy_03.jpg')} style={{width:'100%',height:'100%'}}/></div>}
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMy />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}