/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutMe.css';

class AboutMe extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            Who am I.
          </div>
          <h3 className={s.textSelection}>
            I am a<span className={s.textInvisible}> DREAMER.</span>
          </h3>
          <br />
          <p className={s.textSelection}>
            I <span className={`${s.red} ${s.textSelection}`}>dream</span> of a world were people wake up with a smile in their face.
            A world were working and being happy is something that every single person can have the
            chance to experience.
            Dreamers can always <span className={`${s.red} ${s.textSelection}`}>dream </span>
            of utopias, but me, I live and fight for the moment <span
            className={`${s.red} ${s.textSelection}`}>dreams </span>
            will come true, starting small (with myself), I want to be surrounded be people who
            are living their <span className={`${s.red} ${s.textSelection}`}>dream </span>
            every day so that I can live mine as well.
          </p>
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            What kind of projects I like.
          </div>
          <h3 className={s.textSelection}>
            I like to work in projects that fill me with<span
            className={s.textInvisible}> JOY.</span>
          </h3>
          <br />

          <p className={s.textSelection}>
            Fortunately, there are many things that give me
            <span className={`${s.red} ${s.textSelection}`}> joy</span>. I am easy. <br />

            Learning what are the best practices in my field gives me
            <span className={`${s.red} ${s.textSelection}`}> joy</span>. <br />
            Making user experience unique and smooth at the same time gives me
            <span className={`${s.red} ${s.textSelection}`}> joy</span>. <br />
            Working in projects that help to make this world a better place gives me
            <span className={`${s.red} ${s.textSelection}`}> joy</span>. <br />


            I know most of the people are in the business for the money,
            and of course this is not a bad thing, but I am not in just for the money.
            Sometimes I think of the world that I would like to live in and then I start working to
            bring this world a tiny bit closer to this reality we currently live in.
          </p>
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            What kind of people do I like to work with.
          </div>
          <h3 className={s.textSelection}>
            That is really the most important part for me.
          </h3>
          <br />

          <p className={s.textSelection}>
            I believe that people who you are surrounded are shaping, in a way, the person you are and will be.
            I also believe that it should be our goal to become the best version of ourselves.
            Please let me explain myself,
            surround a person with people who are curious and you make a curious person,
            surround a person with people who are ambitious and pursue their dreams, and you
            have a person who will chase his dreams.
            <br />
            I personally want to be surrounded by people who live their dream every.single.day.
          </p>
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            Personal Mandra.
          </div>
          <h3 className={s.textSelection}>
            Leave people better than you found them.
          </h3>
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            What I am proud of.
          </div>
          <h3 className={s.textSelection}>
            I am proud when I see myself <span className={s.textInvisible}> GROW.</span>
          </h3>
          <br />

          <p className={s.textSelection}>
            I am proud of myself when I learn and understand to the ground a new thing, this thing can be everything that will make me
            <span className={`${s.red} ${s.textSelection}`}> grow</span> into a better person.
            I fight hard everyday to become someone whose opinion will matter to others, not because I have a huge ego but because I believe in a single beautiful truth
            <span className={`${s.red} ${s.textSelection}`}> always leave people better than you found them.</span>
          </p>
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            How do I see myself in the future.
          </div>
          <h3 className={s.textSelection}>
            Be surrounded by people who have dreams and goals that can actually make a change into this world.
          </h3>
          <br />
        </div>

        <div className={s.textSelection}>
          <div className={`${s.h0} ${s.textSelection}`}>
            <span className={`${s.red} ${s.textSelection}`}>Did you like what you read?</span>
          </div>
          <h3 className={s.textSelection}>
            If yes don't hire me,
          </h3>
          <h4 className={s.textSelection}>
            instead interview me. Ask me what I know.
          </h4>

          <h4 className={s.textSelection}>
            Make sure I am the person I am telling you I am.
            Make sure I fit your team and philosophy.
          </h4>

          <h3 className={s.textSelection}>
            If not,
          </h3>
          <h4 className={s.textSelection}>
            maybe visit me againat some time, I like to evolve myself so maybe there would be something that you like then.
          </h4>

          <h4 className={s.textSelection}>or</h4>
          <h4 className={s.textSelection}>
            tell me what I did wrong or what you didn't like. Feedback is always appreciated.
          </h4>
        </div>

      </div>
    );
  }
}

export default withStyles(s)(AboutMe);
