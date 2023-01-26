import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";


interface IHeaderProps {

}

const HeaderWrapper = styled.div``;

export const Header: FC<IHeaderProps> = (props: IHeaderProps) => {


    return (
        <HeaderWrapper>
            <div className="wrapper">
                <Link href="/home">Home</Link>
                <Link href="/">Index</Link>
            </div>
        </HeaderWrapper>
    )

}