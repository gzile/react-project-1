import React from "react";
import avatarImage from '../../images/avatar.png';
import { SkillList } from "./skillList";
import { UserCard } from "./userCard";

export const MainComponent = ({ user }) => {

  return (
    <main>
      <UserCard avatar={avatarImage} name={user.name} lastName={user.lastName} />
      <SkillList skills={user.skills} />
    </main>
  )
}
