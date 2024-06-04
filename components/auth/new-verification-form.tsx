"use client";

import { PropagateLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const NewVerificationForm = () => {
    return (
        <CardWrapper
            headerLabel="Confirm your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <div className="flex itmes-center w-full justify-center">
                <PropagateLoader/>
            </div>
        </CardWrapper>
    );
}