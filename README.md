# Ken-Ken-Pa (ccp7-greenfield)

# Introduction

Ken-Ken-Pa is an interactive map of Japan that allows you to keep a virtual diary of your journey in Japan. 

# Features

## Implemented

- Clickable Map of Japan
- Popup menu appears when clicking a prefecture
  - User can navigate to `PrefectureMemories` or `AddNewMemory` views for the selected prefecture
- Localized UI (English/Japanese)
- `Memories` UI for viewing currently logged-in user's memories from all prefectures
- `PrefectureMemories` UI for viewing all users' memories from a specified prefecture
- `AddNewMemory` UI for uploading a new memory
- `Login` UI for user login
- `NavBar` UI
- Express server initialized
- Firebase integration initialized
- Database migration and seed files initialized

## To-do

- [ ] Run Express server on deployment - [#47](https://github.com/LakGillJPN/ccp7-greenfield/issues/47)
- [ ] Setup production database
- [ ] Implement API endpoints for storing/accessing user `uid`s from Firebase - [#35](https://github.com/LakGillJPN/ccp7-greenfield/issues/35)
- [ ] Implement API endpoints for storing/accessing photos (memories)
- [ ] Create UI components for displaying photos in `Memories` and `PrefectureMemories` - [#46](https://github.com/LakGillJPN/ccp7-greenfield/issues/46)
- [ ] Finish CSS styling - [#26](https://github.com/LakGillJPN/ccp7-greenfield/issues/26), [#28](https://github.com/LakGillJPN/ccp7-greenfield/issues/28), [#37](https://github.com/LakGillJPN/ccp7-greenfield/issues/37)
- [ ] Dynamically display buttons in `NavBar` based on current view - [#40](https://github.com/LakGillJPN/ccp7-greenfield/issues/40), [#48](https://github.com/LakGillJPN/ccp7-greenfield/issues/48)
- [ ] Create UI for user signup
- [ ] ...?


# Attributions
Map information was sourced from the public domain dataset [Natural Earth Data](https://www.naturalearthdata.com/).
