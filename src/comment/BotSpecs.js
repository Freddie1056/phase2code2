import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles/botSpecs.module.css';

export default function BotSpecs({ bot, handleGoBack, handleEnlist, handleRetire }) {
  const emojis = {
    "Support": "🚚",
    "Defender": "🛡️",
    "Assault": "🔫",
    "Medic": "🩺",
    "Captain": "👨‍✈️",
    "Witch": "🚀"
  };

  return (
    <div className={styles.botSpecs}>
      <button onClick={handleGoBack}>⬅️</button>
      <div className={styles.specsCont}>
        <div className={styles.bot}>
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className={styles.botImage}
          />
          <div className={styles.botName}>{bot.name}</div>
          <div>
            {bot.bot_class} {emojis[bot.bot_class]}
          </div>
          <div className={styles.catchPhrase}>{bot.catchphrase}</div>
        </div>
        <div>
          <div className={styles.properties}>
            <div>Health 🩺</div>
            <Slider percent={bot.health} />
          </div>
          <div className={styles.properties}>
            <div>Damage 🤖</div>
            <Slider percent={bot.damage} />
          </div>
          <div className={styles.properties}>
            <div>Armor 🛡️</div>
            <Slider percent={bot.armor} />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => handleEnlist(bot.id)}>Enlist ✅</button>
            <button onClick={() => handleRetire(bot.id)}>Retire ❌</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ percent }) {
  const spring = useSpring({
    from: {
      width: 0
    },
    to: { width: percent + "%" },
    config: { duration: 800 }
  });

  return (
    <div className={styles.sliderContainer}>
      <animated.div
        className={styles.slider}
        style={{
          width: spring.width,
          background: spring.width.to(w =>
            w < 30
              ? "#E73824"
              : w < 60
              ? "#EE8526"
              : w < 90
              ? "#F5B31F"
              : w < 120
              ? "#FFFFFF"
              : w < 150
              ? "#BAC731"
              : w < 170
              ? "#64BB49"
              : "#62B74E"
          )
        }}
      >
        <animated.div>{spring.width.to(w => `${Math.round(w)}%`)}</animated.div>
      </animated.div>
    </div>
  );
}
