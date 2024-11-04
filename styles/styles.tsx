import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  regBox: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 92,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  form: {
    paddingHorizontal: 16,
  },

  avatar: {
    position: 'absolute',
    borderRadius: 16,
    width: 120,
    height: 120,
    marginTop: -150,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
  },

  img: {
    borderRadius: 16,
    width: 120,
    height: 120,

    alignSelf: 'center',
  },

  btnAdd: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
    // fill: '#FF6C00',
  },

  btnAddActive: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
  },

  formTitle: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    height: 50,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
  },

  hiddenPass: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  textPassHidden: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
  },

  button: {
    paddingVertical: 16,
    width: 353,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    lineHeight: 19,
  },

  loginForm: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 111,
    alignItems: 'center',
  },
});

export const postStyle = StyleSheet.create({
  trashBtn: {
    width: 70,
    height: 40,
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  pubBtnText: {
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  photoBox: {
    position: 'relative',
    height: 240,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    overflow: 'hidden',
    // width: 343,
    // height: 240,
    // position: 'relative',

    // backgroundColor: '#E8E8E8',
    // borderColor: '#E8E8E8',
    // borderRadius: 20,
  },

  imgBtn: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },

  textCreatePost: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: 32,
  },

  createPostInput: {
    height: 50,
    paddingVertical: 16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    color: '#212121',
    // fontWeight: 500,
    fontSize: 16,
  },

  locationInput: {
    position: 'relative',
    height: 50,
    paddingVertical: 16,
    paddingLeft: 28,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    color: '#212121',
  },
});

export const postItem = StyleSheet.create({
  itemWrapper: {},
  postPhoto: {
    width: '100%',
    height: 240,
    marginBottom: 8,
  },
  postTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  postDiscription: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export const profileStyle = StyleSheet.create({
  profileBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 32,
    marginTop: 32,
    marginLeft: 16,
  },

  profileContact: {
    marginLeft: 8,
    justifyContent: 'center',
  },

  profileName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
  },

  profileEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});