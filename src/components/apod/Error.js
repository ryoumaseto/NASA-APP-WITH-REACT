import React from 'react'
import cat from './40428.jpg'

function Error() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">世界一かわいい猫</p>
        <div className="relative mb-6 mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8 items-center">
          <img src={cat} loading="lazy" alt='ねこ' className="h-3/6 w-4/6 object-cover object-center mx-auto" />
        </div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">データの取得に失敗しました。</h2>
          <p className="text-gray-500 sm:text-lg">代わりに僕の隣で眠る猫をお見せします。再度検索して下さい</p>
          <p className="text-gray-500 sm:text-lg">*1995/0616 ~ 本日の期間でで検索してください</p>

      </div>
    );
}

export default Error;