const initialState = {
  userData: null,
  userProfile: {  
    "assets_id":"",
    "first_name":"",
    "last_name":"",
    "email":"",
    "city":"",
    "state":"",
    "country":"",
    "zip_code":"",
    "mobile_no":"",
    "landline_no":"",
    "assets_type":"",
    "owner_type":"",
    "profile_photo":"",
    "about_us":"",
    "facebook_link":"",
    "twitter_link":"",
    "linkedin_link":"",
    "SSN_EIN":null,
    "dob":"",
    "gender":null
  }
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        userData: action.userData,
        userProfile: state.userProfile
      };
    }
    default:
      return state;
  }
}
