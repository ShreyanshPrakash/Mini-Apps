import { navLinks } from "@/components/Header/HeaderConfig";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

/*
 * @interface This is interface for Header componet
 */
interface IHeaderProps {}

const HeaderWrapper = styled.div`
  background-color: #212157;
  padding: 12px;

  .wrapper {
    display: flex;
    gap: 24px;

    a {
      color: #fff;
      text-decoration: none;
    }

    .nav-link-text {
      text-decoration: none;
      color: white;
      letter-spacing: 1px;
    }
  }
`;

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
        {navLinks.map((item) => {
          const { href, text } = item;

          return (
            <Link href={href} key={href}>
              <p className="nav-link-text">{text}</p>
            </Link>
          );
        })}
      </div>
    </HeaderWrapper>
  );
};
