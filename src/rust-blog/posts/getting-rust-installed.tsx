import { Stack, Title, Text, Image, Flex, List, Code  } from "@mantine/core";
import { Green, Pink, Red, JavaScript, Rust, Cpp, Python, Blue } from "../data/reusedComponents";
import ozy from '../../assets/ozymandias.jpg'
import flash from '../../assets/flash.png'
import care from '../../assets/care-now.png'

export default function GettingRustInstalled() {
  return (
    <Stack gap='md'>

      <Flex direction="column" gap={'xl'} >
        
        <Text> Like why am I even doing this? </Text>

        <Text ta="left">
          I&apos;m not going to pretend my interest in this language started out of love
        </Text>

        <Text ta="left">
          The truth is it came out of <Red>HATE</Red> 
        </Text>

        <Text ta="left">
          <JavaScript>Javascript</JavaScript> was my first professional language, and while you can do a lot with it, It&apos;s feels so boring now
        </Text>

          <Text ta="left">
            It seems like every single web app looks exactly the same:
            <List  ta="left" type="ordered" spacing={0} size="sm" icon={<span>•</span>}>
              <List.Item>Vibe coded spaghetti code</List.Item>
              <List.Item>Next.js/Vercel</List.Item>
              <List.Item>Shadcn</List.Item>
              <List.Item>900GB node_modules folder</List.Item>
            </List>
          </Text>

        <Text ta="left">
          Look, I&apos;m not saying I never use any of this stuff, but <Pink>where is the love?</Pink> 
        </Text>

        <Text ta="left"  style={{ margin: 0 }}>
          At Cornell, there was a required class called Startup Studio. It was supposed to help students iterate and work together on their startup ideas, and the most successful ones would even get 100k from Cornell
        </Text>

        <Text ta="left">
          Some would become pretty successful companies
        <Text ta="left">
          The other 99% - <Red>DASHBOARDS</Red> 
        </Text>
        </Text>



      </Flex>

      <Flex justify="center" align="center" direction={'column'}>
        <Image
            src={ozy}
            radius="md"
              w="100%"
            maw={300}
        />
        <Text ta="left" style={{ fontStyle: 'italic' }}>
          Look upon my dashboards, ye mighty and despair
        </Text>
      </Flex>
      <Flex direction="column" gap={'xl'} >
        
        <Text ta="left">
          I once did a hackathon, and the top 5 apps that made it to the final round were all Next.js dashboards. Is this really what the people want?... If it is, then
        <Text ta="left">
          then...
        </Text>
        </Text>

        <Text ta="left">
          Then... I guess I&apos;m making dashboards, hey man&apos;s still gotta eat!
        </Text>

      <Text ta="left">
        But its also when I started browsing around.  And look what I found... 
      </Text>

      <Text ta="left">
        <Rust>Rust</Rust> isn’t super new, but it isn’t old either. It sits in a
        sweet spot: mature enough to have a strong ecosystem and package manager
        <Code>cargo</Code>, but young enough to benefit from modern language
        design and tools like <Code>rustup</Code> and <Code>rustc</Code>
      </Text>

      <Text ta="left">
        In many ways, <Rust>Rust</Rust> grew out of the frustrations developers had
        with <Cpp>C++</Cpp>. <Cpp>C++</Cpp> gives you raw power over security, which is why it became the backbone of a ton of stuff. But that power also comes
        with sharp edges: memory leaks, dangling pointers, and entire classes of vulnerabilities. <Rust>Rust</Rust> tries to keep the good parts, while eliminating many of those problems before the program even runs
      </Text>

      <Text ta="left">
        Can you see the similarity here? <Rust>Rust</Rust> was born out of <Red>HATE</Red> too!
      </Text>

      <Text ta="left">
        Its also cares about two things:
      </Text>

      </Flex>
      <Flex justify="center" gap="md" align="center">
        <Image
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGR3MHRmNWwzazc2ZGJyMXBiNmYzaGkxd3J6dWw3cjZ2bzBhanVpYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MFsqcBSoOKPbjtmvWz/giphy.gif"
          radius="md"
          maw={200}
          height={200}
        />
        <Title>+</Title>
        <Image
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU3aHZodGZsMWVnOG80NWZjaXo2NzlqY3dzcWljaDZqMXQweHo2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TOTUxpxgTz7KRxJPn8/giphy.gif"
          radius="md"
          maw={200}
          height={200}
        />
      </Flex>
      <Title order={2}>
        <Green>MONEY</Green> and <Red>SPEED</Red>
      </Title>
      <Flex direction="column" gap={'xl'} >

        <Text ta="left">
          No, no, I don&apos;t mean about making money (although I am not going to complain). 
          It&apos;s about SAVING money
        </Text>

        <Text ta="left">
          If your service needs 20 servers to handle traffic, and someone rewrites
          the critical parts in <Rust>Rust</Rust> and suddenly it only needs 5,
          that’s not just a technical improvement, that a promotion! (for your manager of course)
        </Text>

        <Text ta="left">
          It lets you squeeze more work out of the same hardware.
        <Text ta="left">
          Which ultimately means one thing: <Green>lower cloud bills</Green>
        </Text>
        </Text>


        <Text ta="left">
          And if there&apos;s anything that causes a CTO to salivate, its that 
        </Text>

          <Text ta="left">
          Lets talk about the speed
        </Text>
      </Flex>

      <Flex justify="center" gap="md" align="center">
        <Image
            src={flash}
            radius="md"
              w="100%"
            maw={300}
        />
      </Flex>

      <Flex direction="column" gap={'xl'} >
        <Text ta="left">
          <Red>Speed</Red> is awesome
        </Text>

        <Text ta="left">
        <Rust>Rust</Rust> compiles down to native machine code just like <Cpp>C++</Cpp>. The result is software that&apos;s incredibly fast, the kind of performance you want
      </Text>

      <Text ta="left">
        Coming from <JavaScript>JavaScript</JavaScript> and <Python>Python</Python>, I never used a compiler before…
      <Text ta="left">
        What it actually means is that once you build, you then get a little file of machine code which is the thingy that actually runs
      </Text>
      <Text ta="left">
        Maybe in the future I&apos;ll run into some problems with it. But for now, its so easy to use
      </Text>
      </Text>


      <Text ta="left">
        To me, <Red>speed</Red> is something you want in 10/10 cases. You want <Red>speed</Red> because its <Red>speed</Red>. No manager has ever told me, lets make something slower
      </Text>
      <Text ta="left">
        But when you&apos;re doing web dev, speed is very low on the priority totem pole. Like yeah, if an API call is slow, it is what it is. Half the time you&apos;re just mindlessly copying an npm package over anyway. (Not that I&apos;ve ever done that mr hiring manager)
      </Text>

      <Text ta="left">
        And don&apos;t get me started on AI&apos;s. Like yes, Claude will ultimately do what you want after you fight with it for 30 minutes, but will it be efficient? Hell no
      </Text>
      <Text ta="left">
        Truth is, why spend 2 weeks trying to shave off 2 seconds off a loading screen, when you could have spent that time shipping a new feature?
      </Text>

      <Text ta="left">
        <Red>Speed</Red> is just not something a fullstack dev cares about toooo much
      </Text>

      <Text ta="left">
        Until now
      </Text>

      </Flex>
      <Flex justify="center" gap="md" align="center">
        <Image
            src={care}
            radius="md"
              w="100%"
            maw={300}
        />
      </Flex>
      <Flex direction="column" gap={'xl'} >
        <Text ta="left">
          All <Rust>rust</Rust> jobs want is <Red>speed</Red>
        </Text>
        <Text ta="left">
          And they want it
          <Text ta="left">
          a lot
        </Text>
        </Text>
        <Text ta="left">
          <List ta="left" type="ordered" spacing={0} size="sm" icon={<span>•</span>}>
            <List.Item><Blue>Amazon / AWS</Blue> – performance‑critical backend services</List.Item>
            <List.Item><Blue>Meta</Blue> – systems infrastructure</List.Item>
            <List.Item><Blue>Discord</Blue> – highly concurrent messaging</List.Item>
            <List.Item><Blue>Cloudflare</Blue> – networking, edge compute</List.Item>
            <List.Item><Blue>Fidelity</Blue> & <Blue>Jane Street</Blue> – low‑latency trading systems</List.Item>
            etc...
          </List>
        </Text>

      <Text ta="left">
        Notice the lack of dashboards on that list.
      </Text>

      <Text ta="left">
         I&apos;d rather spend my days working on hyper optimizing an ML model than moving a button two pixels to the right, or implementing auth for the 90th time again. Maybe this will work out, or maybe this will make me homeless. But I&apos;m going to be documenting my journey here
      </Text>
      <Text ta="left">
        Thank you so much for reading
      </Text>
      </Flex>
    </Stack>
  );
}