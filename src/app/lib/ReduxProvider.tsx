"use client";
import React from "react";

import {makeStore} from "@/src/app/lib/store";
import {Provider} from "react-redux";


export const ReduxProvider = (props: React.PropsWithChildren) => {
    return <Provider store={makeStore()}>{props.children}</Provider>;
};