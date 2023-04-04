export default function ContactForm() {
    return (
        <div className="w-full max-w-xl mt-20 m-auto">
        <form action="/api/form" method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label 
                className="block mt-4 text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:</label>
            <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                id="name" 
                name="name" 
                placeholder="..."
            />
            <label 
                className="block mt-4 text-gray-700 text-sm font-bold mb-2" 
                htmlFor="message">Message:
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" id="message"
                name="message" 
                maxLength={5000} 
                minLength={3} 
                placeholder="..."
            />
            <input 
                required 
                type="checkbox" 
                className="mt-4 mr-2 leading-tight">
            </input>
            <span className="text-sm">I promise that I'm human.</span>
            <button 
                className="flex justify-center w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto" 
                type="submit">
                Send
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
            </div>
        </form>
        </div>

    )
}
