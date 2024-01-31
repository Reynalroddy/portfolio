
"use client"
import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { DotIcon } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const Skills =()=>{
    return <div className="">
       
          {/* <DotIcon className='h-[2rem] w-[2rem]  transition-all  dark:text-white' /> */}
          <p className='text-gray-600 dark:text-white text-md font-semibold my-4 '>
JavaScript, React, Next-js, Redux,Tailwind CSS, Node.js, React-native, Express, PostgreSQL, Mongo DB, Prime-react,Prisma ORM, SQL, Sequelize, HTML, CSS, and Git
</p>
    </div>
}


const Education =()=>{
    return           <p className='text-gray-600 dark:text-white text-md font-semibold my-4 '>
   B.S.C Computer Science,Federal University of Agriculture Abeokuta(FUNAAB).
    </p>
}
export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="sm:w-full lg:w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-primary">
        <TabsTrigger value="account">Skills</TabsTrigger>
        <TabsTrigger value="password">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="account">

       <Skills/>
        {/* <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card> */}
      </TabsContent>
      <TabsContent value="password">
     <Education/>
        {/* <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card> */}
      </TabsContent>
    </Tabs>
  )
}
