var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
export default function generate() {
return nameList[Math.floor(Math.random() * nameList.length)];
      };


    export  function getRandomMessage() {
        const messages = [
          "Crush your goals 🎯", "Keep pushing 🚀", "Push to success ⬆️", "Eat. Sleep. Repeat. 🔁",
          "Stand tall 🗿", "Think positive ✨", "Spread love 💌", "You've got this 💪",
          "Focus up 🎧", "Choose joy 😊", "Stay curious 🧐", "Peace within 🧘",
          "Never back down 🐯", "Stay calm 🌊", "Breathe deeply 🌬️", "Lend a hand 🤝",
          "Debug life 🐞", "New horizons 🌅", "Hustle hard 💼", "Snack break 🍿",
          "You are magic 🪄", "Nap time? 😴", "Late nights, bright ideas 💡", "Good vibes only 🌈",
          "Adventure awaits 🗺️", "Fight on 🥊", "Rise & shine 🌞", "Unleash greatness 🦁",
          "Stack overflow your skills 💾", "Slow and steady 🐢", "Lift others 🪜", "Dream big 💭",
          "Git committed 🔧", "Work in silence 🤫", "Explore more 🧭", "One step at a time 👣",
          "Stay strong 🛡️", "Shine bright 🌟", "Grind mode on 🛠️", "Be kind 💖",
          "On fire 🔥", "Be legendary 🏆", "You're unstoppable 💥", "You’re a warrior ⚔️",
          "No limits 🚫", "Own the day 📅", "Code smarter 👨‍💻", "Coffee = fuel ☕",
          "Wander often 🚶", "Smile more 😄"
          // You can add more if you'd like!
        ];
      
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
      }
      
      // Example usage:

      // utils/helper.js

const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
    "https://i.pravatar.cc/40?img=6",
    "https://i.pravatar.cc/40?img=7",
    "https://i.pravatar.cc/40?img=8",
    "https://i.pravatar.cc/40?img=9",
    "https://i.pravatar.cc/40?img=10",
  ];
  
  export const getRandomAvatar = () => {
    return avatars[Math.floor(Math.random() * avatars.length)];
  };
  