import React from 'react'
import cat from './40428.jpg'

function Error() {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="relative mb-6 mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8 items-center">
          <img src={cat} loading="lazy" alt='ねこ' class="h-3/6 w-4/6 object-cover object-center mx-auto" />
        </div>
          <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">データの取得に失敗しました。</h2>
          <p class="text-gray-500 sm:text-lg">代わりに僕の隣で眠る猫をお見せします。再度検索して下さい</p>
      </div>
    );
}

export default Error;