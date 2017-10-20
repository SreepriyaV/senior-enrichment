const GETCAMPUS = "GETCAMPUS";

const UPDATECAMPUS = "UPDATECAMPUS";

export default function reducer(campus = {}, action) {
  switch (action.type) {
    case GETCAMPUS:
      return action.campus;

    case UPDATECAMPUS:
      return action.campus;

    default:
      return campus;
  }
}
