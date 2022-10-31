package com.example.TraditionalWeb.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.io.Serial;
import java.util.Collection;
import java.util.Collections;

public class UserDetailsImpl implements UserDetails {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private String userName;

    private String fullName;

    private String email;

    private Boolean isAdmin;

    private String password;


    public UserDetailsImpl(Long id, String userName, String password, String email, Boolean isAdmin){
        this.id=id;
        this.userName=userName;
        this.password = password;
        this.email=email;
        this.isAdmin=isAdmin;
    }

    public UserDetailsImpl(UserDetails userDetails,String email, String fullName){
        this.userName=userDetails.getUsername();
        this.password = userDetails.getPassword();
        this.email=email;
        this.fullName=fullName;
    }

    public static UserDetailsImpl build(User user) {
        return new UserDetailsImpl(user.getId(), user.getUsername(), user.getPassword(), user.getEmail(), user.getAdmin());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
    }

    public Long getId(){return id;}

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail(){return email;}

    public Boolean getIsAdmin(){return isAdmin;}

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}
