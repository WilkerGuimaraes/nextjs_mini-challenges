"use client";

import { User } from "types/users.types";
import { SearchForm } from "./searchForm";
import { useEffect, useState } from "react";

interface ClientSideSectionProps {
  initialUsers: User[];
}

export function ClientSideSection({ initialUsers }: ClientSideSectionProps) {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(initialUsers);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      setFilteredUsers(
        initialUsers.filter((user) =>
          user.hobbies.some((hobby) =>
            hobby.toLowerCase().includes(query.toLowerCase()),
          ),
        ),
      );
    } else {
      setFilteredUsers(initialUsers);
    }
  }, [query, initialUsers]);

  function handleSearch(query: string) {
    setQuery(query);
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      <div className="flex flex-col items-center">
        {filteredUsers && (
          <ul className="grid gap-4 text-lg md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <li key={user.id} className="border px-12 py-4 shadow-sm">
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p>
                  <strong>ID:</strong> {user.id}
                </p>
                <p>
                  <strong>Age:</strong> {user.age}
                </p>
                <p>
                  <strong>Active:</strong> {user.isActive ? "Yes" : "No"}
                </p>
                <div>
                  <strong>Hobbies:</strong>
                  <ul className="list-inside list-disc">
                    {user.hobbies.map((hobby) => (
                      <li key={hobby}>{hobby}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Address:</strong>
                  <ul>
                    <li>Street: {user.address.street}</li>
                    <li>City: {user.address.city}</li>
                    <li>Postal Code: {user.address.postalCode}</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
