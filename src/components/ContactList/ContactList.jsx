import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import React from 'react';
import { DeleteBtn, List, Item, UserInfo, Avatar } from './ContactLIst.styled';
import { HiOutlineTrash } from 'react-icons/hi';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const listVAriatns = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <>
      <List>
        {contacts.map(({ id, name, number, avatar }, i) => {
          return (
            <motion.div
              key={id}
              variants={listVAriatns}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <Item>
                <Avatar
                  src={
                    avatar
                      ? avatar
                      : 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
                  }
                  alt="avatar"
                />
                <UserInfo>
                  {name}: {number}
                </UserInfo>
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <HiOutlineTrash size={20} />
                </DeleteBtn>
              </Item>
            </motion.div>
          );
        })}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
