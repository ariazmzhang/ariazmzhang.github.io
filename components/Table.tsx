export default function Table(){
    return (
        <div className="text-gray-900 relative flex flex-col shadow-lg mb-6 rounded-md">
            <h1 className="mb-16 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    M
                    <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    y&nbsp;
                    </span>
                    Fav Rest
                    <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    a
                    </span>
                    urants
                </h1>
            <div>
                
                <table className="w-auto">
                    <thead>
                        <tr className="border border-solid border-l-0 rounded-md">
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-md px-6 py-3">Lorem Ipsum</th>
                            <td className="text-md px-6 py-3">Lorem Ipsum</td>
                            <td className="text-md px-6 py-3">Lorem Ipsum</td>
                            <td className="text-md px-6 py-3">Lorem Ipsum</td>
                            <td className="text-md px-6 py-3">Lorem Ipsum</td>
                        </tr>
                        <tr>
                            <th className="text-md px-6 py-3"></th>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                        </tr>
                        <tr>
                            <th className="text-md px-6 py-3"></th>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                            <td className="text-md px-6 py-3"></td>
                        </tr>
                        <tr>
                        <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            
        </div>
    )
}