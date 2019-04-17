const mutations = {
  saveRegistrationInfor(state, val) {
    state.userName = val.username;
    state.phoneNumber = val.iphone;
    state.password = val.password;

    sessionStorage.setItem('userName', state.userName);
    sessionStorage.setItem('phoneNumber', state.phoneNumber);
    // sessionStorage.setItem('password', state.password);
  },
  saveBasicInfor(state, val) {
    state.userName = val.userName;
    state.checkGender = val.checkGender;
    state.checkIdentity = val.checkIdentity;
    state.school = val.school;
    state.class = val.class;
    state.region = val.region;
    sessionStorage.setItem('userName', state.userName);
    sessionStorage.setItem('checkIdentity', state.checkIdentity);
  },
  saveSuginInInfor(state, val) {
		state.token = val.token;
		sessionStorage.setItem('token', val.token);
    state.landFlag = val.flag;
  },
  savePersonalData(state, val) {
    state.photo = val.photo;
    state.userName = val.userName;
    state.checkGender = val.checkGender;
    state.region = val.region;
    state.school = val.school;
    sessionStorage.setItem('userName', state.userName);
  },
  changePassword(state, val) {
    state.password = val.userPassword;
    sessionStorage.setItem('password', state.password);
  },
}

export default mutations
