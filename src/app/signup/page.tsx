"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {CreditCard, KeyRound, Phone, SquareUser} from "lucide-react";
import {toast} from "sonner";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {signUpAction} from "@/actions/signup.action";

const formSchema = z.object({
  nombre: z
    .string({
      invalid_type_error: "Nmbre completo no debe contener digitos",
    })
    .min(2)
    .max(50)
    .optional(),
  licencia: z
    .string({
      required_error: "Licencia de conducir es requerida",
      invalid_type_error: "no debe contener espacios",
    })
    .min(11, "debe contener 11 digitos")
    .max(11, "debe contener 11 digitos")
    .trim(),
  telefono: z
    .string({
      required_error: "Numero de Telefono es requerido",
      invalid_type_error: "Numero de Telefono debe ser digitos",
    })
    .min(10, "Numero de Telefono debe contener 10 digitos")
    .max(10, "Numero de Telefono debe contener 10 digitos"),
  password: z
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(4, "Debe tener al menos 4 letras"),
});

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      </pre>,
    );
  }

  return (
    <Card className="mx-auto mt-10 w-full max-w-xl">
      <CardHeader className="text-center">
        <CardTitle>Registro de usuario!</CardTitle>
        <CardDescription>Ingresar sus datos</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(signUpAction)}>
            <FormField
              control={form.control}
              name="licencia"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="licencia">Numero de licencia</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <CreditCard className="absolute left-2.5 top-1 h-8" strokeWidth={2} />

                      <Input
                        className="pl-11"
                        id="licencia"
                        placeholder="Ingrese su numero de licencia aqui!"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nombre"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="nombre">Nombre completo</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <SquareUser className="absolute left-2.5 top-1 h-8" strokeWidth={2} />
                      <Input
                        className="pl-11"
                        id="nombre"
                        placeholder="Su nombre completo"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telefono"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="telefono">Numero de telefono</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-1 h-8" strokeWidth={2} />
                      <Input className="pl-11" id="telefono" placeholder="000-000-000" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel htmlFor="password">Nueva contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <KeyRound className="absolute left-2.5 top-1 h-8" strokeWidth={2} />
                      <Input
                        className="pl-11"
                        id="password"
                        placeholder="******"
                        type="password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Registrarse</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

/*
  const disabledDays = [new Date(2024, 1, 5), new Date(2024, 1, 12), new Date(2024, 1, 20)];
  <FormField
   control={form.control}
   name="dob"
   render={({ field }) => (
     <FormItem className="flex flex-col">
       <FormLabel>fecha para reserva</FormLabel>
       <Popover>
         <PopoverTrigger asChild>
           <FormControl>
             <Button
               className={cn(
                 "pl-3 text-left font-normal",
                 !field.value && "text-muted-foreground",
               )}
               variant="outline"
             >
               {field.value ? (
                 format(field.value, "PPP")
               ) : (
                 <span>Seleccionar fecha</span>
               )}
               <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
             </Button>
           </FormControl>
         </PopoverTrigger>
         <PopoverContent align="start" className="w-auto p-0">
           <Calendar
             initialFocus
             disabled={disabledDays}
             mode="single"
             selected={field.value}
             onSelect={field.onChange}
           />
         </PopoverContent>
       </Popover>
     </FormItem>
   )}
 />; */
