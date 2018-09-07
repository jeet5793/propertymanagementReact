const initialState = {
  userData: null,
  userProfile: {  
    "assets_id":"54",
    "first_name":"jomin",
    "last_name":"john",
    "email":"jominjohn55@gmail.com",
    "city":"test",
    "state":"test",
    "country":"test",
    "zip_code":"110040",
    "mobile_no":"9898989898",
    "landline_no":"8987878787",
    "assets_type":"1",
    "owner_type":"1",
    "profile_photo":"",
    "about_us":"",
    "facebook_link":"",
    "twitter_link":"",
    "linkedin_link":"",
    "SSN_EIN":false,
    "dob":"01-01-1970",
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
