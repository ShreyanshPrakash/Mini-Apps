import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";


/*
* @interface This is interface for Header componet
*/
interface IHeaderProps {

}

const HeaderWrapper = styled.div``;

/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the shoe size.
 *
 * @param {string} color - The shoe's color.
 * 
 * * @description - Just a React component to render Header component,
 * with link to home and index page
 */
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