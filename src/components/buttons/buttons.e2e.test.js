import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Buttons from './buttons';
import user from '../../mocks/user';
import film from '../../mocks/films';

configure({adapter: new Adapter()});


test(`Click on "Add favorite button"`, () => {
  const onAddFavoriteButtonClick = jest.fn();

  const wrapper = shallow(
      <Buttons
        film={film[0]}
        user={user}
        isReview={false}
        onClickButton={onAddFavoriteButtonClick}
      />
  );

  wrapper.find(`button.btn--list`).simulate(`click`);
  expect(onAddFavoriteButtonClick).toHaveBeenCalledTimes(1);
});
