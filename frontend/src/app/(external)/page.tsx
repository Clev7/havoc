import Text from "./components/Text"

export default function IndexPage() {
    return (
        <div className="bg-blue-400 min-h-screen flex justify-center items-center">
            <div className="bg-blue-950 text-white text-center text-xl w-[75%] min-h-96 m-1 rounded-2xl">
                <p className="m-1 p-3 text-7xl">
                    Welcome to Havoc!
                </p>
                <h1 className="m-1 p-3 text-white text-left text-4xl">
                    What is this project about?
                </h1>
                <Text>
                    This is a passion project of mine. My intent is to give as much power as
                    possible to the people when using social media. It is my hope that this app
                    can give people the opportunity to appreciate the value of a free internet.
                    Consequently, it's also my hope that it gives people the opportunity to educate
                    themselves about the different ways governments and corporations attack
                        It's become very clear to me
                    over the years that social media has taken a turn for the worse.
                </Text>
                <Text>
                    Tech companies have time and again shown that they do not care about people as
                    much as they do the bottom line. Social media not only grants them a
                    disproportionate amount of control over the conversation control, but also over
                    a massive part of the internet. For as long as these companies form the
                    backbone of what people see and how they see it, they will remain a key
                    obstacle to a free internet.
                </Text>
                <Text>
                    In order to address the issue, we must first identify the problem, which starts
                    with the tech companies and their respective "platforms" (we'll get to that in
                    a second). Currently, I believe social media suffers from the following
                    problems:
                    <br />
                    <ol className="mt-3 list-decimal list-inside">
                        <li>
                           Extreme centralization and monopolization
                        </li>
                        <li>
                            Capitalization on a near total lack of privacy
                        </li>
                        <li>
                            Vulnerability to mass social engineering
                        </li>
                    </ol>
                </Text>
                <h1 className="text-2xl">
                    <b className="border-b-dotted border-b-30px">
                        Extreme centralization and monopolization
                    </b>
                </h1>
                <Text>
                    When social media is centralized and monopolized, it means that governments
                    need only apply pressure on only a key players in order to exert full
                    control over their people through said app. This can lead to
                    <ul className="list-disc list-inside">
                        <li>Mass censorship of speech</li>
                        <li>Promotion of government-sponsored media</li>
                        <li>
                            Procurement of user data to said governments, leading to mass
                            surveillance
                        </li>
                    </ul>
                </Text>
            </div>
        </div>
    )
}