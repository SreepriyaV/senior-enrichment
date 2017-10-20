const GETCAMPUSES = "GETCAMPUSES";
const ADDCAMPUS = "ADDCAMPUS";
const DELETECAMPUS = "DELETECAMPUS";

export default function reducer(campuses = [], action) {
  switch (action.type) {
    case GETCAMPUSES:
      return action.campuses;
    case ADDCAMPUS:
      return [...campuses, action.campus];
    case DELETECAMPUS:
      return action.campuses;

    default:
      return campuses;
  }
}
