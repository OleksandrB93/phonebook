import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoading } from "redux/contacts/selectors";

import Phonebook from "components/Phonebook/Phonebook";
import SearchInput from "components/SearchInput/SearchInput";
import ContactList from "components/ContactList/ContactList";
import SkeletonItem from "components/Skeleton/SkeletonItem";
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <title>Your contacts</title>

        <Phonebook />
        <SearchInput />
        {isLoading ? <SkeletonItem /> : <ContactList />}
    </div>
  );
}
