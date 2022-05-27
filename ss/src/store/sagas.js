import { all, fork } from "@redux-saga/core/effects";

import PostSaga from "./posts/saga";

export default function* rootSaga() {
    yield all([fork(PostSaga)]);
}