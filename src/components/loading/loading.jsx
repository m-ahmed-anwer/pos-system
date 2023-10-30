import React from "react";

function Loading({ loading }) {
  return (
    <div
      class={`${
        !loading
          ? "hidden"
          : "flex items-center justify-center w-full h-full pt-16"
      } `}
    >
      <div class="flex justify-center items-center space-x-1 text-lg text-gray-700">
        <svg fill="none" class="w-6 h-6 animate-spin" viewBox="0 0 32 32">
          <path
            clip-rule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>

        <div>Loading ...</div>
      </div>
    </div>
  );
}

export default Loading;
