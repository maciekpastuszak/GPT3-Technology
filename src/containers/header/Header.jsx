import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Somethung Amazing with GPT3 OpenAI
        </h1>
        <p>
        Lorem ipsum dolor sit amet. Est aliquam tempore et vero facilis rem excepturi velit. A Quis tenetur eum tempore tenetur est molestias quae ex atque officiis non consequatur sapiente in atque cupiditate. Sed modi neque aut molestiae reprehenderit id sint galisum eum perferendis molestias id repellat voluptatem.

Est dolores laudantium aut eaque laudantium id quas ducimus eum consequuntur quia. Sit omnis rerum sed deserunt dolores qui error dolore.

Et dolor explicabo qui galisum illo sit nesciunt corporis ut natus possimus eos impedit sunt? Sit voluptatem nihil sit dolore tempore aut quia vero et numquam optio et dolorum alias et quis debitis?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your e-mail address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header