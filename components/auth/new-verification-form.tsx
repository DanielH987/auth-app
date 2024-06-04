"use client";

import { useCallback, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        console.log(token);
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

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