import React, { Component } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import BigBox from "./components/BigBox";

import SmallBox from "./components/SmallBox";

import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineTwitter,
} from "react-icons/ai";

class App extends Component {
  state = { darkMode: true };
  render() {
    const icons = {
      fb: FaFacebookSquare,
      yt: FaYoutube,
      ig: FaInstagram,
      tr: AiOutlineTwitter,
      up: AiOutlineCaretUp,
      down: AiOutlineCaretDown,
    };
    const colors = {};
    if (this.state.darkMode) {
      colors.backgroundColor = "#20222f";
      colors.bodyColor = "#1d2029";
      colors.primaryText = "hsl(0, 0%, 100%)";
      colors.secondaryText = "hsl(228, 34%, 66%)";
    } else {
      colors.backgroundColor = "hsl(225, 100%, 98%)";
      colors.bodyColor = "#fff";
      colors.primaryText = "hsl(230, 17%, 14%)";
      colors.secondaryText = "hsl(228, 12%, 44%)";
    }

    const darkModeHandler = () => {
      if (this.state.darkMode) {
        this.setState({ darkMode: false });
      } else {
        this.setState({ darkMode: true });
      }
    };
    return (
      <div style={{ backgroundColor: colors.bodyColor }}>
        <div
          className="pb-32 "
          style={{ backgroundColor: colors.backgroundColor }}
        >
          <header className="flex pt-10 w-11/12 m-auto text-white">
            <div>
              <h1
                className="font-bold text-2xl"
                style={{ color: colors.primaryText }}
              >
                Social Media Dashboard
              </h1>
              <p className="text-xs" style={{ color: colors.secondaryText }}>
                Total Followers: 23,004
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <p style={{ color: colors.secondaryText }}>Dark Mode</p>
              <span className="ml-2 flex items-center">
                <ToggleSwitch clicked={darkModeHandler} />
              </span>
            </div>
          </header>
        </div>
        <section className="w-11/12 m-auto">
          <div className="flex flex-wrap justify-around  -mt-20">
            <BigBox
              isDark={this.state.darkMode}
              primaryText={colors.primaryText}
              secondaryText={colors.secondaryText}
              mediaName="facebook"
              icon={icons.fb}
              iconColor="#138cf5"
              name="@nathanf"
              followers="1987"
              trendsIcon={icons.up}
              trendsNumber="12"
              trendsColor="text-green-500"
            />
            <BigBox
              isDark={this.state.darkMode}
              primaryText={colors.primaryText}
              secondaryText={colors.secondaryText}
              mediaName="twitter"
              icon={icons.tr}
              iconColor="#138cf5"
              name="@nathanf"
              followers="1044"
              trendsIcon={icons.up}
              trendsNumber="99"
              trendsColor="text-green-500"
            />
            <BigBox
              isDark={this.state.darkMode}
              primaryText={colors.primaryText}
              secondaryText={colors.secondaryText}
              mediaName="instagram"
              icon={icons.ig}
              iconColor="#ef7486"
              name="@nathanf"
              followers="11k"
              trendsIcon={icons.up}
              trendsNumber="1099"
              trendsColor="text-green-500"
            />
            <BigBox
              isDark={this.state.darkMode}
              primaryText={colors.primaryText}
              secondaryText={colors.secondaryText}
              mediaName="youtube"
              icon={icons.yt}
              iconColor="#c1022b"
              name="@nathanf"
              subscribers="8239"
              trendsIcon={icons.down}
              trendsNumber="144"
              trendsColor="text-red-600"
            />
          </div>
          <div className="pb-10">
            <h1
              className="text-lg text-white mt-8"
              style={{ color: colors.secondaryText }}
            >
              Overview - Today
            </h1>
            <div className="flex flex-wrap justify-around mt-6">
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Page Views"
                icon={icons.fb}
                iconColor="#138cf5"
                value="87"
                changeInTrends="3"
                trendsIcon={icons.up}
                trendsColor="text-green-500"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Likes"
                icon={icons.fb}
                iconColor="#138cf5"
                value="52"
                changeInTrends="2"
                trendsIcon={icons.down}
                trendsColor="text-red-700"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Likes"
                icon={icons.ig}
                iconColor="#ef7486"
                value="5462"
                changeInTrends="2257"
                trendsIcon={icons.up}
                trendsColor="text-green-500"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Profile Views"
                icon={icons.ig}
                iconColor="#ef7486"
                value="52k"
                changeInTrends="1375"
                trendsIcon={icons.up}
                trendsColor="text-green-500"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Retweets"
                icon={icons.tr}
                iconColor="#138cf5"
                value="117"
                changeInTrends="303"
                trendsIcon={icons.up}
                trendsColor="text-green-500"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Likes"
                icon={icons.tr}
                iconColor="#138cf5"
                value="507"
                changeInTrends="553"
                trendsIcon={icons.up}
                trendsColor="text-green-500"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Likes"
                icon={icons.yt}
                iconColor="#c1022b"
                value="107"
                changeInTrends="19"
                trendsIcon={icons.down}
                trendsColor="text-red-600"
              />
              <SmallBox
                isDark={this.state.darkMode}
                primaryText={colors.primaryText}
                secondaryText={colors.secondaryText}
                property="Total Views"
                icon={icons.yt}
                iconColor="#c1022b"
                value="1407"
                changeInTrends="12"
                trendsIcon={icons.down}
                trendsColor="text-red-600"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
