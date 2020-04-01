import React, {Component} from 'react';
import {Text, View, CheckBox, Button, Platform} from 'react-native';
import {Tabs} from 'antd-mobile';
import SignUpStyles from './SignUpPage.styles';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputFormComponent from '../Form/InputForm';

const tabs = [
  {title: 'Đăng nhập', sub: '1'},
  {title: 'Đăng ký', sub: '2'},
];
//where console.log :D ???

export default class Cat extends Component {
  state = {
    maleCheck: false,
    isDatePickerShow: false,
    birthDayInput: '',
  };

  onChange = (event, selectedDate) => {
    this.setState({isDatePickerShow: false});
    this.setState({isDatePickerShow: Platform.OS === 'ios'});
    this.setState({birthDayInput: selectedDate});
  };

  showDatePicker = () => {
    console.log('weqwejnii');
    this.setState({isDatePickerShow: true});
  };

  render() {
    const {maleCheck, isDatePickerShow} = this.state;

    return (
      <View style={SignUpStyles.container}>
        <View style={SignUpStyles.headerContainer}>
          <Text style={SignUpStyles.headerTitle}>Đăng nhập/Đăng ký</Text>
        </View>
        <View style={SignUpStyles.tabContainer}>
          <Tabs style={SignUpStyles.tabStyle} tabs={tabs} initialPage={1} />
        </View>
        <InputFormComponent placeholder="Họ và tên" />
        <InputFormComponent
          keyboardType="numeric"
          placeholder="Số điện thoại"
        />
        <InputFormComponent placeholder="Email" />
        <InputFormComponent secureTextEntry={true} placeholder="Mật khẩu" />
        <InputFormComponent
          onPress={this.showDatePicker}
          placeholder="Ngày sinh"
        />
        {isDatePickerShow ? (
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            display="default"
            onChange={this.onChange}
          />
        ) : null}
        {/* <DatePicker mode="date" title="Ngày sinh" /> */}
        <View style={SignUpStyles.checkBoxContainer}>
          {/*this doesnt work*/}
          <CheckBox
            onPress={() => this.setState({maleCheck: !maleCheck})}
            center
            checked={maleCheck}
          />
          <Text>Nam</Text>
          <CheckBox
            onPress={() => this.setState({maleCheck: !maleCheck})}
            center
            checked={maleCheck}
          />
          <Text>Nữ</Text>
        </View>
        <View style={SignUpStyles.buttom}>
          <Button
            color="red"
            style={SignUpStyles.signUpButton}
            title="Đăng ký"
          />
          <Text style={SignUpStyles.bottomText}>
            Khi đăng ký là bạn đã chấp nhận{' '}
            <Text style={SignUpStyles.policy}>điều khoản sử dụng</Text>
          </Text>
        </View>
      </View>
    );
  }
}
